ipfsStorage
===========

Simple localStorage-like storage using IPFS.

Usage
-----

```
> ipfsStorage
< Object {}

> ipfsStorage.num = 23
< 23

> ipfsStorage.text = 'test'
< "test"

> ipfsStorage
< Object {num: 23, text: "test"}

> ipfsStorage.save()
< Save successful: QmcuopysRiM4cuA9YkGpwZoTER3JwK6rY2oE6a8ua51cyf
```

Reload page with F5 to clear ipfsStorage.

```
> ipfsStorage
< Object {}

> ipfsStorage.load('QmcuopysRiM4cuA9YkGpwZoTER3JwK6rY2oE6a8ua51cyf')
< Load successful: QmcuopysRiM4cuA9YkGpwZoTER3JwK6rY2oE6a8ua51cyf

> ipfsStorage
< Object {num: 23, text: "test"}
```

Functions `load()` and `save()` return promises which return object data and object hash respectively.

IPFS Gateway Setup
------------------

In order for this to work you need to add the following to your IPFS config file:

``` json
  "Gateway": {
    "HTTPHeaders": {
      "Access-Control-Allow-Credentials": [
        "true"
      ],
      "Access-Control-Allow-Methods": [
        "PUT",
        "GET",
        "POST",
        "OPTIONS"
      ],
      "Access-Control-Expose-Headers": [
        "Ipfs-Hash"
      ],
      "Access-Control-Allow-Origin": [
        "*"
      ]
    },
    "RootRedirect": "",
    "Writable": true
  },
```
