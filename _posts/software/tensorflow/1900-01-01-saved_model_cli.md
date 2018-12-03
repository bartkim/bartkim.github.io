---
title: Saved Model에서 Input/Output Tensor 정보 얻기
excerpt: saved model 파헤치기
categories:
  - tensorflow
permalink: /sw/tensorflow/inout_tensor_from_saved_model
toc: true
toc_sticky: true
---

## input/output tensor 정보 얻기

아래와 같은 명령을 통해 input/output tensor의 정보를 얻을 수 있다.
```
> python scripts\saved_model_cli.exe
    show ^
    --dir {SAVED_MODEL_DIR} ^
    --tag_set {TAG_SET} ^
    --signature_def {SIGNITURE_DEF}
```

명령의 결과로 다음과 같은 정보를 얻을 수 있다.
* tensor data type
* tensor shape
* tensor name 


```
The given SavedModel SignatureDef contains the following input(s):
  inputs['x'] tensor_info:
      dtype: DT_FLOAT
      shape: (-1, -1, -1, -1)
      name: probs_x:0
The given SavedModel SignatureDef contains the following output(s):
  outputs['0_heatmap'] tensor_info:
      dtype: DT_FLOAT
      shape: (-1, 4, 4, 1280)
      name: StatefulPartitionedCall:0
  outputs['1_probs'] tensor_info:
      dtype: DT_FLOAT
      shape: (-1, 4)
      name: StatefulPartitionedCall:1
  outputs['2_latent_feature'] tensor_info:
      dtype: DT_FLOAT
      shape: (-1, 1280)
      name: StatefulPartitionedCall:2
  outputs['3_logits'] tensor_info:
      dtype: DT_FLOAT
      shape: (-1, 4)
      name: StatefulPartitionedCall:3
Method name is: tensorflow/serving/predict
```


## saved_model_cli 의 다른 기능

### Tag Set 정보 얻기
```
> saved_model_cli show --dir {SAVED_MODEL_DIR}
```

### SignatureDef 정보 얻기
```
> saved_model_cli show --dir {SAVED_MODEL_DIR} --tag_set serve
```


## Reference
- [Using the SavedModel format](https://www.tensorflow.org/guide/saved_model?hl=ko)
