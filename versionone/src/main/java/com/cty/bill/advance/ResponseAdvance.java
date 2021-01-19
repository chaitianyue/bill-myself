package com.cty.bill.advance;

import cn.hutool.core.util.ObjectUtil;
import com.cty.bill.annotation.AutowiredResult;
import com.cty.bill.pojo.ResultTO;
import org.springframework.core.MethodParameter;
import org.springframework.http.MediaType;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;

/**
 * @author cty
 * @date 2021/1/19 15:52
 */
@ControllerAdvice
public class ResponseAdvance implements ResponseBodyAdvice {
    @Override
    public boolean supports(MethodParameter methodParameter, Class aClass) {
        return  methodParameter.getDeclaringClass().isAnnotationPresent(AutowiredResult.class);
    }

    @Override
    public Object beforeBodyWrite(Object data, MethodParameter methodParameter, MediaType mediaType, Class aClass, ServerHttpRequest serverHttpRequest, ServerHttpResponse serverHttpResponse) {
        if (ObjectUtil.isNotEmpty(data)&&"ResultTO".equalsIgnoreCase(data.getClass().getSimpleName())){
            return data;
        }else {
            ResultTO resultTO = new ResultTO();
            resultTO.setResult(data);
            return resultTO;
        }
    }
}
