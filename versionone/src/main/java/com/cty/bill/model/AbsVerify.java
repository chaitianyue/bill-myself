package com.cty.bill.model;

import com.mysql.cj.util.StringUtils;

/**
 * @author cty
 * @date 2020/12/21 14:26
 */
public abstract class AbsVerify implements Verify {
      protected String data;
      protected String errorMsg;

    protected Verify nextVerify;
    protected VerifyCallBack callBack;


    public AbsVerify(String data, String errorMsg) {
        this.data = data;
        this.errorMsg = errorMsg;
    }

    @Override
    public void setNextVerify(Verify nextVerify) {
        this.nextVerify = nextVerify;
    }




    @Override
    public boolean showErrorMsg(String errorMsg) {
        if (callBack != null) {
            callBack.failure();
        }
        if (!StringUtils.isNullOrEmpty(errorMsg)) {
            System.out.println(errorMsg);
        }
        return false;
    }



    //执行下一个校验
    protected boolean doNextFilter() {
        if (callBack != null) {
            callBack.sussecc();
        }
        return nextVerify != null ? nextVerify.doVerify() : true;
    }

    //是否为空
    protected boolean isEmpty(String msg) {
        return StringUtils.isNullOrEmpty(msg);
    }

    public VerifyCallBack getCallBack() {
        return callBack;
    }

    public void setCallBack(VerifyCallBack callBack) {
        this.callBack = callBack;
    }




}
