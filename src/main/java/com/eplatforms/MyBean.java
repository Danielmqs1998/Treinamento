package com.eplatforms;


import java.io.Serializable;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

import com.eplatforms.rest.ProductREST;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import jakarta.faces.view.ViewScoped;
import jakarta.inject.Named;
import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.WebTarget;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Named(value = "myBean")
@ViewScoped
public class MyBean implements Serializable {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
    	String url = "http://localhost:3000/products/all";

        HttpClient httpClient = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        try {
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            String responseBody = response.body();
            List<ProductREST> productRest = new Gson().fromJson(responseBody, new TypeToken<List<ProductREST>>() {}.getType());
            System.out.print(productRest);
            // Processar a resposta conforme necessário
        } catch (Exception e) {
            e.printStackTrace();
            // Tratar exceções, se necessário
        }
    }
    

    public void setMessage2(String message) {
    	String url = "http://localhost:3000/products/all";

        Client client = ClientBuilder.newClient();
        WebTarget target = client.target(url);

        try {
            Response response = target.request(MediaType.APPLICATION_JSON).get();
            String responseBody = response.readEntity(String.class);
            List<ProductREST> productRest = new Gson().fromJson(responseBody, new TypeToken<List<ProductREST>>() {}.getType());
            System.out.print(productRest);
            // Processar a resposta conforme necessário
        } catch (Exception e) {
            e.printStackTrace();
            // Tratar exceções, se necessário
        }
    }
    
    public void updateMessage() {
    	System.out.print("TESTE");
    }

}
