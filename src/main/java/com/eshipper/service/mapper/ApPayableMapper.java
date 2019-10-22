package com.eshipper.service.mapper;

import com.eshipper.domain.*;
import com.eshipper.service.dto.ApPayableDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link ApPayable} and its DTO {@link ApPayableDTO}.
 */
@Mapper(componentModel = "spring", uses = {ApPayeeTypeMapper.class, ApPayeeMapper.class, ApCategoryTypeMapper.class, PaymentMethodMapper.class})
public interface ApPayableMapper extends EntityMapper<ApPayableDTO, ApPayable> {

    @Mapping(source = "apPayeeType.id", target = "apPayeeTypeId")
    @Mapping(source = "apPayee.id", target = "apPayeeId")
    @Mapping(source = "apCategoryType.id", target = "apCategoryTypeId")
    @Mapping(source = "paymentMethod.id", target = "paymentMethodId")
    ApPayableDTO toDto(ApPayable apPayable);

    @Mapping(target = "apPayableCreditNotesTrans", ignore = true)
    @Mapping(target = "removeApPayableCreditNotesTrans", ignore = true)
    @Mapping(target = "creditUsedFrmAPPayables", ignore = true)
    @Mapping(target = "removeCreditUsedFrmAPPayable", ignore = true)
    @Mapping(source = "apPayeeTypeId", target = "apPayeeType")
    @Mapping(source = "apPayeeId", target = "apPayee")
    @Mapping(source = "apCategoryTypeId", target = "apCategoryType")
    @Mapping(source = "paymentMethodId", target = "paymentMethod")
    ApPayable toEntity(ApPayableDTO apPayableDTO);

    default ApPayable fromId(Long id) {
        if (id == null) {
            return null;
        }
        ApPayable apPayable = new ApPayable();
        apPayable.setId(id);
        return apPayable;
    }
}
