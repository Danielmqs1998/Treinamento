package com.eplatforms.rest;

import java.io.Serializable;

public class ProductREST implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	

	private int id;
	private String nome;
	private double valor;
	
	public ProductREST(){
		
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public double getValor() {
		return valor;
	}
	public void setValor(double valor) {
		this.valor = valor;
	}

}
