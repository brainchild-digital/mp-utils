# CODESMITHS SHANGHAI WECHAT MINI PROGRAM HELPER FUNCTIONS - USER GUIDE

## Functions Index

1. Mini Program DOM
2. Page selector
3. px & rpx converter
4. Other

## Installation

Using npm:

```bash
npm i @codesmiths/mp-utils
```

### Mini Program DOM

* querySelect(classOrId, component)
* getElementHeight(classOrId, component)

#### Examples

```javascript
import cu from '@codesmiths/mp-utils'; 

cu.querySelect('#componentId', this)
  .then((res) => {
    // if found, res[0] returns wxml element
    console.log(res[0])
  })

cu.querySelect('.className', this)
  .then((res) => {
    // if found, res[0] returns array of wxml elements
    console.log(res[0])
  })
```

### Page & Component selector

* thisPage()
* lastPage()
* allPages()

Useful WeChat Component functions

```javascript
// From parent component (or page) to select a child component
this.selectComponent('#componentId')

// From child component to select parent component (or page)
this.selectOwnerComponent()
```

### px & rpx

* getRpx(px)
* getPx(rpx)
* getSafeArea()
