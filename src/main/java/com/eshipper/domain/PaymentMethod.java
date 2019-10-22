package com.eshipper.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A PaymentMethod.
 */
@Entity
@Table(name = "payment_method")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class PaymentMethod implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 255)
    @Column(name = "name", length = 255)
    private String name;

    @OneToMany(mappedBy = "paymentMethod")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<ApPayable> apPayables = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public PaymentMethod name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<ApPayable> getApPayables() {
        return apPayables;
    }

    public PaymentMethod apPayables(Set<ApPayable> apPayables) {
        this.apPayables = apPayables;
        return this;
    }

    public PaymentMethod addApPayable(ApPayable apPayable) {
        this.apPayables.add(apPayable);
        apPayable.setPaymentMethod(this);
        return this;
    }

    public PaymentMethod removeApPayable(ApPayable apPayable) {
        this.apPayables.remove(apPayable);
        apPayable.setPaymentMethod(null);
        return this;
    }

    public void setApPayables(Set<ApPayable> apPayables) {
        this.apPayables = apPayables;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof PaymentMethod)) {
            return false;
        }
        return id != null && id.equals(((PaymentMethod) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "PaymentMethod{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            "}";
    }
}
