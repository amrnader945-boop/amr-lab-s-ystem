let port;textDecoder;
document.getElementById("connect").onclick = async () => {
try {port = await navigator.serial.requestPort();await port.open({ baudRate: 9600 });
document.getElementById("status").innerHTML = "Connected ✔";
textDecoder = new TextDecoderStream();port.readable.pipeTo(textDecoder.writable);
const reader = textDecoder.readable.getReader();
while (true) {const { value, done } = await reader.read();if (done) break;console.log(value);} }
catch (err) {alert("Connection Failed");}};
