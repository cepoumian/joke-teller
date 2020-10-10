const button = document.getElementById('button');
const audioElement = document.getElementById('audio')

// VoiceRSS Javascript SDK
"use strict"; var VoiceRSS = { speech: function (e) { this._validate(e), this._request(e) }, _validate: function (e) { if (!e) throw "The settings are undefined"; if (!e.key) throw "The API key is undefined"; if (!e.src) throw "The text is undefined"; if (!e.hl) throw "The language is undefined"; if (e.c && "auto" != e.c.toLowerCase()) { var t = !1; switch (e.c.toLowerCase()) { case "mp3": t = (new Audio).canPlayType("audio/mpeg").replace("no", ""); break; case "wav": t = (new Audio).canPlayType("audio/wav").replace("no", ""); break; case "aac": t = (new Audio).canPlayType("audio/aac").replace("no", ""); break; case "ogg": t = (new Audio).canPlayType("audio/ogg").replace("no", ""); break; case "caf": t = (new Audio).canPlayType("audio/x-caf").replace("no", "") }if (!t) throw "The browser does not support the audio codec " + e.c } }, _request: function (e) { var t = this._buildRequest(e), a = this._getXHR(); a.onreadystatechange = function () { if (4 == a.readyState && 200 == a.status) { if (0 == a.responseText.indexOf("ERROR")) throw a.responseText; audioElement.src = a.responseText, audioElement.play() } }, a.open("POST", "https://api.voicerss.org/", !0), a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), a.send(t) }, _buildRequest: function (e) { var t = e.c && "auto" != e.c.toLowerCase() ? e.c : this._detectCodec(); return "key=" + (e.key || "") + "&src=" + (e.src || "") + "&hl=" + (e.hl || "") + "&v=" + (e.v || "") + "&r=" + (e.r || "") + "&c=" + (t || "") + "&f=" + (e.f || "") + "&ssml=" + (e.ssml || "") + "&b64=true" }, _detectCodec: function () { var e = new Audio; return e.canPlayType("audio/mpeg").replace("no", "") ? "mp3" : e.canPlayType("audio/wav").replace("no", "") ? "wav" : e.canPlayType("audio/aac").replace("no", "") ? "aac" : e.canPlayType("audio/ogg").replace("no", "") ? "ogg" : e.canPlayType("audio/x-caf").replace("no", "") ? "caf" : "" }, _getXHR: function () { try { return new XMLHttpRequest } catch (e) { } try { return new ActiveXObject("Msxml3.XMLHTTP") } catch (e) { } try { return new ActiveXObject("Msxml2.XMLHTTP.6.0") } catch (e) { } try { return new ActiveXObject("Msxml2.XMLHTTP.3.0") } catch (e) { } try { return new ActiveXObject("Msxml2.XMLHTTP") } catch (e) { } try { return new ActiveXObject("Microsoft.XMLHTTP") } catch (e) { } throw "The browser does not support HTTP request" } }; function test() { VoiceRSS.speech({ key: "87a9e62cc2464f9b937296ca143581ca", src: "Hello, world!", hl: "en-us", v: "Linda", r: 0, c: "mp3", f: "44khz_16bit_stereo", ssml: !1 }) }

async function getJokes() {
  let joke = '';
  const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    console.log(joke);    
  } catch(error) {
    console.log('whoops, ', error);
  }
}

getJokes();