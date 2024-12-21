package com.eplatforms.controller;

import java.io.Serializable;

import com.eplatforms.util.PropertiesLoader;

import jakarta.faces.context.FacesContext;
import jakarta.faces.view.ViewScoped;
import jakarta.inject.Named;
import jakarta.servlet.http.HttpSession;
import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.core.Response;

@Named(value = "homeController")
@ViewScoped
public class HomeController implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private final String URL = new PropertiesLoader().getBackend();

	public void logout() {
		Client client = ClientBuilder.newClient();
		HttpSession session = (HttpSession) FacesContext.getCurrentInstance().getExternalContext().getSession(true);
		String tokenAtual = (String) session.getAttribute("token_atual");
		Response response = client.target(URL + "/auth/logout").request().header("Authorization", "Bearer " + tokenAtual).post(null);
		if (response.getStatus() == 200) {
			try {
				session.setAttribute("token_atual", null);
				FacesContext.getCurrentInstance().getExternalContext().redirect("login.xhtml");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	public void carregarGraficos() {
		
	}
}
