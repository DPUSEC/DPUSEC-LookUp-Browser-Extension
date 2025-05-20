let selectionTimeout;
let cursor = {x:0, y:0};

document.addEventListener("mousemove", event => {
    cursor = {x:event.clientX, y:event.clientY};
})

function showPopup(selection) {
    document.querySelector(".__dpusec.__popup")?.remove();
    let container = document.createElement("div");
    container.className = "__dpusec __popup";
    container.style.setProperty("--cursor-x", (cursor.x + 8) + "px");
    container.style.setProperty("--cursor-y", (cursor.y - 40) + "px");
    let ip_addr = selection?.match(/[\.[0-9x]{1,3}\.[0-9x]{1,3}\.[0-9x]{1,3}\.[0-9x]{1,3}/g)?.[0];
    let domain_addr = selection?.match(/[a-zA-Z0-9\.\-\_]+[a-zA-Z0-9\-\_]+\.[a-zA-Z0-9\-\_]+/g)?.[0];
    let hash = selection?.match(/[0-9abcdefABCDEF]{16,}/g)?.[0];
    if(ip_addr){
        /* vt */
        let vt = document.createElement("button");
        vt.className = "vt";
        vt.addEventListener("click", (event, _selection = ip_addr) => {
            window.open("https://www.virustotal.com/gui/ip-address/" + _selection, "_blank");
        });
        container.append(vt);
        /* abusel */
        let abusel = document.createElement("button");
        abusel.className = "abusel";
        abusel.addEventListener("click", (event, _selection = ip_addr) => {
            window.open("https://www.abuseipdb.com/check/" + _selection, "_blank");
        });
        container.append(abusel);
        /* tb */
        let tb = document.createElement("button");
        tb.className = "tb";
        tb.addEventListener("click", (event, _selection = ip_addr) => {
            window.open("https://threatbook.io/ip/" + _selection, "_blank");
        });
        container.append(tb);
    } else if(domain_addr){
        /* vt */
        let vt = document.createElement("button");
        vt.className = "vt";
        vt.addEventListener("click", (event, _selection = domain_addr) => {
            window.open("https://www.virustotal.com/gui/domain/" + _selection, "_blank");
        });
        container.append(vt);
        /* abusel */
        let abusel = document.createElement("button");
        abusel.className = "abusel";
        abusel.addEventListener("click", (event, _selection = domain_addr) => {
            window.open("https://www.abuseipdb.com/check/?query=" + _selection, "_blank");
        });
        container.append(abusel);
        /* tb */
        let tb = document.createElement("button");
        tb.className = "tb";
        tb.addEventListener("click", (event, _selection = domain_addr) => {
            window.open("https://threatbook.io/domain/" + _selection, "_blank");
        });
        container.append(tb);
        /* mx */
        let mx = document.createElement("button");
        mx.className = "mx";
        mx.addEventListener("click", (event, _selection = domain_addr) => {
            window.open("https://mxtoolbox.com/SuperTool.aspx?action=" + _selection, "_blank");
        });
        container.append(mx);
    } else if(hash) {
        let vt = document.createElement("button");
        vt.className = "vt";
        vt.addEventListener("click", (event, _selection = hash) => {
            window.open("https://www.virustotal.com/gui/file/" + _selection, "_blank");
        });
        container.append(vt);
    } else {
        return;
    };
    document.body.append(container);
    document.addEventListener("mousedown", () => {
        document.addEventListener("click", () => {
            setTimeout(() => {
                container.remove();
            }, 10);
        }, {once:true});
    });
}

document.addEventListener("selectionchange", () => {
    clearTimeout(selectionTimeout);

    selectionTimeout = setTimeout(() => {
        const selection = window.getSelection().toString().trim();
        if(!!selection){
            showPopup(selection);
        };
    }, 250);
});
