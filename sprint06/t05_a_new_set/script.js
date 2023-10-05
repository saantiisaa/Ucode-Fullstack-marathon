document.addEventListener('DOMContentLoaded', function () {
    const formArray = document.getElementsByTagName("form");
    const form = document.querySelector("form");

    form.addEventListener("reset", (e) => {
        document.getElementById("data").innerHTML = "";
        document.getElementById("data").style.visibility = "visible";
    })

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const tab = '\t';
        let content = "<h2>Post</h2><p>Array</p><pre>{</pre>";

        [...formArray[0]].forEach((item) => {
            if (item.name) {
                if (item.name === "photo") {
                    let filename = item.value.replace(/C:\\fakepath\\/, '');
                    content += `<pre>${tab}[${item.name}] => ${filename}</pre>`;
                } else {
                    content += `<pre>${tab}[${item.name}] => ${item.value}</pre>`;
                }
            }
        });

        content += `<p>}</p></pre></br>`;

        console.log(content);

        document.getElementById("data").innerHTML = content;
        document.getElementById("data").style.visibility = "visible";
    })
})
