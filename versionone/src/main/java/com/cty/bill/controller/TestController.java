package com.cty.bill.controller;

import com.cty.bill.annotation.AutowiredResult;
import com.cty.bill.mapper.TestMapper;
import com.cty.bill.model.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author cty
 * @date 2020/12/17 18:10
 */
@RestController
@RequestMapping( "/test")
@AutowiredResult
public class TestController {
    @Autowired
    private TestMapper testMapper;


    @RequestMapping(value = "/success")
    public List<Test> success(){

        return null;
    }

}
