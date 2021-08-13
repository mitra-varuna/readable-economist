window.addEventListener ("load", cleanUpEconomist, false);

function cleanUpEconomist(evt) {
    let classNames = ['layout-article-promo','advert', 'aside', 'article-recirculation-aside', 'optimizely-recirculation--a', 'optimizely-recirculation--b', 'abtest-most-read-articles-original',
                      'abtest-most-read-articles-variation', 'article__aside'];
    var removeElements = () => {
        classNames.forEach((className => {
            var elements = document.getElementsByClassName(className);
            while(elements.length > 0) {
                elements[0].remove();
            }
        }));
    };
    let footer = document.getElementsByTagName('footer');
    while(footer.length > 0) {
        footer[0].remove();
    }
    const contentNode = document.getElementById('content');
    const config = { attributes: false, childList: true, subtree: true };
    const callback = function(mutationsList, observer) {
        removeElements();

    };
    const observer = new MutationObserver(callback);
    observer.observe(contentNode, config);
}
