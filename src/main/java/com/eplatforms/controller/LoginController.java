package com.eplatforms.controller;

import java.io.Serializable;

import com.eplatforms.rest.AuthRequest;
import com.eplatforms.rest.AuthResponse;
import com.eplatforms.util.PropertiesLoader;

import jakarta.annotation.PostConstruct;
import jakarta.faces.context.FacesContext;
import jakarta.faces.view.ViewScoped;
import jakarta.inject.Named;
import jakarta.servlet.http.HttpSession;
import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

/**
 * Controller da tela de login.
 * 
 */
@Named(value = "loginController")
@ViewScoped
public class LoginController implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String usuario;
	private String senha;
	private final String URL = new PropertiesLoader().getBackend();

	// faz chamada ao back-end, caso o usuario estiver logado redireciona para a
	// pagina de usuario com acesso.
	@PostConstruct
	private void inicializar() {
		String token = verificarToken();
		if (token != null && !token.isEmpty()){
			redirecionar();
		}
	}

	public void login() {

		Client client = ClientBuilder.newClient();

		AuthRequest credenciais = new AuthRequest();
		credenciais.setToken(verificarToken());
		credenciais.setUsername(usuario);
		credenciais.setPassword(senha);

		try {
			Response response = client.target(URL + "/auth/login").request(MediaType.APPLICATION_JSON)
					.post(Entity.json(credenciais));

			AuthResponse resposta = null;
			if (response != null && response.getStatus() == 200) {
				resposta = response.readEntity(AuthResponse.class);
				if (resposta.isAutenticado()) {
					String token = response.getCookies().get("jwt").getValue();
					HttpSession session = (HttpSession) FacesContext.getCurrentInstance().getExternalContext()
							.getSession(true);
					session.setAttribute("token_atual", token);
					redirecionar();
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private void redirecionar() {
		try {
			FacesContext.getCurrentInstance().getExternalContext().redirect(
					FacesContext.getCurrentInstance().getExternalContext().getRequestContextPath() + "/paginas/index.xhtml");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private String verificarToken() {
		HttpSession session = (HttpSession) FacesContext.getCurrentInstance().getExternalContext().getSession(true);
		String token = (String) session.getAttribute("token_atual");
		return token;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
}
