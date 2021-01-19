package com.cty.bill.model;

import javax.persistence.Table;

/**
 * @author cty
 * @date 2021/1/19 13:27
 */
@Table(name="t_test")
public class Test extends BaseIdentity{

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
