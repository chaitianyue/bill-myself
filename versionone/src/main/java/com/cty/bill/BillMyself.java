package com.cty.bill;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import tk.mybatis.spring.annotation.MapperScan;

/**
 * seata测试版本启动
 * @return
 * @Author cty
 * @Date 2021/1/19 15:54
 */
@SpringBootApplication
@MapperScan("com.cty.bill.mapper")
@ComponentScan(basePackages={"com.cty"})

public class BillMyself {

    public static void main(String[] args) {
        SpringApplication.run(BillMyself.class, args);
    }

}
