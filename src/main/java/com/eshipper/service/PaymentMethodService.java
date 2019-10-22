package com.eshipper.service;

import com.eshipper.service.dto.PaymentMethodDTO;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link com.eshipper.domain.PaymentMethod}.
 */
public interface PaymentMethodService {

    /**
     * Save a paymentMethod.
     *
     * @param paymentMethodDTO the entity to save.
     * @return the persisted entity.
     */
    PaymentMethodDTO save(PaymentMethodDTO paymentMethodDTO);

    /**
     * Get all the paymentMethods.
     *
     * @return the list of entities.
     */
    List<PaymentMethodDTO> findAll();


    /**
     * Get the "id" paymentMethod.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<PaymentMethodDTO> findOne(Long id);

    /**
     * Delete the "id" paymentMethod.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
