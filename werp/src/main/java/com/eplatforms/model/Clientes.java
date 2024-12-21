package com.eplatforms.model;

import java.io.Serializable;
import java.util.Date;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Clientes implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private long codigo;
	@NotNull(message = "Favor informar o nome fantasia.")
	private String nomeFantasia;
	@NotNull
	private String cnpj;
	private String ramo;
	@NotNull
	private String contato;
	private String email;
	private Date dataCadastro;
	private boolean ativo;
	@NotNull
	private Endereco endereco;

	@Getter
	@Setter
	private class Endereco{
		private String pais;
		private String estado;
		private String cidade;
		private String bairro;
		private String endereco;
		private int cep; 
	}

	@Getter
	@Setter
	private class Contrato{
		private String categoria;
		private Date dataValidade;
	}

	public String getNomeFantasia() {
		return nomeFantasia;
	}

	public void setNomeFantasia(String nomeFantasia) {
		this.nomeFantasia = nomeFantasia;
	}
}

