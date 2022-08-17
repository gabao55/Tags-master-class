function eventoEspecífico() {
    window.lintrk('track', { conversion_id: 10143361 });
}

function pixelDeImagem() {
    const body = document.querySelector("body");
    body.innerHTML += `
        <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=4616737&conversionId=10143377&fmt=gif" />
    `
}