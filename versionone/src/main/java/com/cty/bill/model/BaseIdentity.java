package com.cty.bill.model;

import javax.persistence.Column;
import javax.persistence.Id;

/**
 * @author cty
 * @date 2021/1/19 13:29
 */
public class BaseIdentity {

    @Id
    @Column
    private String id;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
