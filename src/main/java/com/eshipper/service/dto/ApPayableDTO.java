package com.eshipper.service.dto;
import java.time.LocalDate;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link com.eshipper.domain.ApPayable} entity.
 */
public class ApPayableDTO implements Serializable {

    private Long id;

    private LocalDate invoiceDate;

    @Max(value = 11)
    private Integer invoiceAmount;

    @Size(max = 255)
    private String invoiceNo;

    @Size(max = 1000)
    private String comment;

    private Boolean isDispute;

    @Size(max = 255)
    private String docPath;

    private Float gst;

    private Float hst;

    private Float pst;

    private Float qst;

    private Float totalAmount;

    private Float balanceDue;

    private LocalDate dueDate;

    private LocalDate createdDate;

    private LocalDate updatedDate;


    private Long apPayeeTypeId;

    private Long apPayeeId;

    private Long apCategoryTypeId;

    private Long paymentMethodId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getInvoiceDate() {
        return invoiceDate;
    }

    public void setInvoiceDate(LocalDate invoiceDate) {
        this.invoiceDate = invoiceDate;
    }

    public Integer getInvoiceAmount() {
        return invoiceAmount;
    }

    public void setInvoiceAmount(Integer invoiceAmount) {
        this.invoiceAmount = invoiceAmount;
    }

    public String getInvoiceNo() {
        return invoiceNo;
    }

    public void setInvoiceNo(String invoiceNo) {
        this.invoiceNo = invoiceNo;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Boolean isIsDispute() {
        return isDispute;
    }

    public void setIsDispute(Boolean isDispute) {
        this.isDispute = isDispute;
    }

    public String getDocPath() {
        return docPath;
    }

    public void setDocPath(String docPath) {
        this.docPath = docPath;
    }

    public Float getGst() {
        return gst;
    }

    public void setGst(Float gst) {
        this.gst = gst;
    }

    public Float getHst() {
        return hst;
    }

    public void setHst(Float hst) {
        this.hst = hst;
    }

    public Float getPst() {
        return pst;
    }

    public void setPst(Float pst) {
        this.pst = pst;
    }

    public Float getQst() {
        return qst;
    }

    public void setQst(Float qst) {
        this.qst = qst;
    }

    public Float getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Float totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Float getBalanceDue() {
        return balanceDue;
    }

    public void setBalanceDue(Float balanceDue) {
        this.balanceDue = balanceDue;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public LocalDate getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDate createdDate) {
        this.createdDate = createdDate;
    }

    public LocalDate getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(LocalDate updatedDate) {
        this.updatedDate = updatedDate;
    }

    public Long getApPayeeTypeId() {
        return apPayeeTypeId;
    }

    public void setApPayeeTypeId(Long apPayeeTypeId) {
        this.apPayeeTypeId = apPayeeTypeId;
    }

    public Long getApPayeeId() {
        return apPayeeId;
    }

    public void setApPayeeId(Long apPayeeId) {
        this.apPayeeId = apPayeeId;
    }

    public Long getApCategoryTypeId() {
        return apCategoryTypeId;
    }

    public void setApCategoryTypeId(Long apCategoryTypeId) {
        this.apCategoryTypeId = apCategoryTypeId;
    }

    public Long getPaymentMethodId() {
        return paymentMethodId;
    }

    public void setPaymentMethodId(Long paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        ApPayableDTO apPayableDTO = (ApPayableDTO) o;
        if (apPayableDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), apPayableDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ApPayableDTO{" +
            "id=" + getId() +
            ", invoiceDate='" + getInvoiceDate() + "'" +
            ", invoiceAmount=" + getInvoiceAmount() +
            ", invoiceNo='" + getInvoiceNo() + "'" +
            ", comment='" + getComment() + "'" +
            ", isDispute='" + isIsDispute() + "'" +
            ", docPath='" + getDocPath() + "'" +
            ", gst=" + getGst() +
            ", hst=" + getHst() +
            ", pst=" + getPst() +
            ", qst=" + getQst() +
            ", totalAmount=" + getTotalAmount() +
            ", balanceDue=" + getBalanceDue() +
            ", dueDate='" + getDueDate() + "'" +
            ", createdDate='" + getCreatedDate() + "'" +
            ", updatedDate='" + getUpdatedDate() + "'" +
            ", apPayeeType=" + getApPayeeTypeId() +
            ", apPayee=" + getApPayeeId() +
            ", apCategoryType=" + getApCategoryTypeId() +
            ", paymentMethod=" + getPaymentMethodId() +
            "}";
    }
}
