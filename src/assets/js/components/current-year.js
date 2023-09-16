/* =============== CURRENT YEAR IN FOOTER =============== */
export default function currentYear() {
    let year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
}
