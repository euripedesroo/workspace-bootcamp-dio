/* Uma Promise representa um proxy para um valor que não é necessariamente conhecido quando a promessa é criada. Isso permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha. Isto permite que métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, o método assíncrono retorna uma promessa ao valor em algum momento no futuro.

Um Promise está em um destes estados: 

pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
fulfilled (realizada): sucesso na operação.
rejected (rejeitado):  falha na operação.
Uma promessa pendente pode se tornar realizada com um valor ou rejeitada por um motivo (erro). Quando um desses estados ocorre, o método then do Promise é chamado, e ele chama o método de tratamento associado ao estado (rejected ou resolved).  Se a promessa foi realizada ou rejeitada quando o método de tratamento correspondente for associado, o método será chamado, deste forma não há uma condição de competição entre uma operação assíncrona e seus manipuladores que estão sendo associados. */
var promiseCount = 0;
function testPromise() {
    var thisPromiseCount = ++promiseCount;

    var log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Started (<small>Sync code started</small>)<br/>');

    // Criamos uma nova promise: prometemos a contagem dessa promise (após aguardar 3s)
    var p1 = new Promise(
        // a função resolve() é chamada com a capacidade para resolver ou
        // rejeitar a promise
        function (resolve, reject) {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise started (<small>Async code started</small>)<br/>');
            // Isto é apenas um exemplo para criar assincronismo
            window.setTimeout(
                function () {
                    // Cumprimos a promessa !
                    resolve(thisPromiseCount)
                }, Math.random() * 2000 + 1000);
        });

    // definimos o que fazer quando a promise for realizada
    p1.then(
        // apenas logamos a mensagem e o valor
        function (val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>Sync code terminated</small>)<br/>');
}
/* Copy to Clipboard */
if ("Promise" in window) {
    btn = document.getElementById("btn");
    btn.addEventListener("click", testPromise);
}
else {
    log = document.getElementById('log');
    log.innerHTML = "Live example not available as your browser doesn't support the Promise interface.";
}