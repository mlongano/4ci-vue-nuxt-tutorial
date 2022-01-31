if ( !String.prototype.interpolate ) {
    String.prototype.interpolate = function ( o ) {
        return this.replace(
            /\{([^{}]*)\}/g,
            function ( a, b ) {
                var r = o[ b ];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}

function data() {
        return {
            message: 'Hello JS!!!',
            world: 'JS'
        }
}

let messageElement = document.querySelector("#hello-vue");
let content = messageElement.textContent.interpolate( data() );
messageElement.textContent = content;

async function pippo() {
    let data1 = await fetch( 'http://localhost:8055/items/Articles' );
    let data  = await data1.json()
    let resp = { pippo : "pippo", data : data}
    let { data : { data: posts } } = resp
    console.log( posts );
}

pippo();
