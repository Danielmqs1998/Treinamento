package com.eplatforms.controller;

import java.io.Serializable;

import com.eplatforms.model.Clientes;
import com.eplatforms.util.PropertiesLoader;

import jakarta.annotation.PostConstruct;
import jakarta.faces.view.ViewScoped;
import jakarta.inject.Named;

/**
 * Controller da tela de cadastro de clientes
 * 
 */
@Named(value = "cadastroClienteController")
@ViewScoped
public class CadastroClienteController implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Clientes cliente = new Clientes();
	
	private final String URL = new PropertiesLoader().getBackend();

	
	public void cadastrar() {
		
	}

	public Clientes getCliente() {
		return cliente;
	}

	public void setCliente(Clientes cliente) {
		this.cliente = cliente;
	}
}
