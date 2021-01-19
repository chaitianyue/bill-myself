package com.cty.bill.pojo;

/**
 * @author cty
 * @date 2021/1/19 15:50
 */
public class ResultTO<T> {
    private  int code=200;
    private boolean success=true;
    private String msg;
    private T result;


    public ResultTO() {
    }

    public ResultTO(T result) {
        this.result = result;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getResult() {
        return result;
    }

    public void setResult(T result) {
        this.result = result;
    }
}
