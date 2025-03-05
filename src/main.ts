import {Bang, bangs} from "./bang";
import "./global.css";
import clipboardIcon from "lucide-static/icons/clipboard.svg";
import clipboardCheckIcon from "lucide-static/icons/clipboard-check.svg";

const defaultBang = bangs.g;
const { hostname, protocol, port } = window.location;
const origin = `${protocol}//${hostname}${port ? `:${port}` : ""}`;
const redirectUrl = `${origin}/?q=%s`;

const copyToClipboard = async (text: string, icon: HTMLImageElement) => {
    await navigator.clipboard.writeText(text);
    icon.src = clipboardCheckIcon;
    setTimeout(() => (icon.src = clipboardIcon), 2000);
};

const noSearchDefaultPageRender = () => {
    const app = document.querySelector<HTMLDivElement>("#app")!;
    app.innerHTML = `
    <div class="page-container">
      <div class="content-container">
        <h1>Und*ck</h1>
        <div class="url-container">
          <input type="text" class="url-input" value="${redirectUrl}" readonly />
          <button class="copy-button">
            <img src="${clipboardIcon}" alt="Copy" />
          </button>
        </div>
      </div>
    </div>
  `;

    const copyButton = app.querySelector<HTMLButtonElement>(".copy-button")!;
    const copyIcon = copyButton.querySelector("img")!;
    const urlInput = app.querySelector<HTMLInputElement>(".url-input")!;

    copyButton.addEventListener("click", () => copyToClipboard(urlInput.value, copyIcon));
};

const getBangRedirectUrl = () => {
    const query = new URL(window.location.href).searchParams.get("q")?.trim() ?? "";
    if (!query) {
        noSearchDefaultPageRender();
        return null;
    }

    const bangCandidate = query.match(/!(\S+)/i)?.[1]?.toLowerCase() ?? "";
    const selectedBang: Bang  = bangs?.[bangCandidate] ?? defaultBang;
    const cleanQuery = query.replace(/!\S+\s*/i, "").trim();
    return selectedBang?.u.replace(
        "{{{s}}}",
        encodeURIComponent(cleanQuery).replace(/%2F/g, "/")
    );
};

const doRedirect = async () => {
    try {
        const searchUrl = getBangRedirectUrl();
        if (searchUrl) window.location.replace(searchUrl);
    } catch (error) {
        console.error("Error during redirect:", error);
    }
};

void doRedirect();
