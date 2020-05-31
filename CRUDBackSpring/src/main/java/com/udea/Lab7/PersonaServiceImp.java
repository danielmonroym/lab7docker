/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.udea.Lab7;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author omonroy
 */
@Service
public class PersonaServiceImp implements PersonaService{
    float aumento;
    float salariofinal;
  @Autowired
  private PersonaRepositorio repositorio;
    @Override
    public List<Persona> listar() {
        return repositorio.findAll();
    }

    @Override
    public Persona listarId(int id) {
       return repositorio.findById(id);
    }

    @Override
    public Persona add(Persona p) {
    
      if(p.getAntiguedad()>=2){
     aumento=p.getSalario()*10/100;
     salariofinal=p.getSalario()+aumento;
        p.setSalario(salariofinal);
    }
    return repositorio.save(p);
    }

    @Override
    public Persona edit(Persona p) {
        return repositorio.save(p);
    }

    @Override
    public Persona delete(int id) {
        Persona p = repositorio.findById(id);
        if(p!= null){
            repositorio.delete(p);
        }
        return p;
    }
    
}
