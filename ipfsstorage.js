const GATEWAY_URL = 'http://localhost:8080/ipfs/';

var ipfsStorage = {

    load: function(hash) {
        return fetch(GATEWAY_URL + hash)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
               for (var key in json) {
                   if (key != 'load' && key != 'save') {
                       this[key] = json[key];
                   }
               }
               console.log('Load successful:', hash);
               return json;
            })
           .catch((error) => {
               log('Load failed:', error)
            });
    },

    save: function() {
        var json = JSON.stringify(this);
        return fetch(GATEWAY_URL, { method: 'post', mode: 'cors', body: json})
            .then((response) => {
                return response.headers.get('Ipfs-Hash');
            })
            .then((hash) => {
               console.log('Save successful:', hash);
               return hash;
            })
            .catch((error) => {
                log('Save failed:', error)
            });
    }
}

window.onload = function() {
    window.ipfsStorage = ipfsStorage;
};
