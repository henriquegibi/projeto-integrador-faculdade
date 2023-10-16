package click.henriquegibi.projetointegrador.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Frase extends JpaRepository<click.henriquegibi.projetointegrador.repository.FraseRepository, Long> {

}
