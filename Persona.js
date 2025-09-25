class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.adjetivoCalificativo = adjetivoCalificativo;
        this.verbo = verbo;
        this.parteCuerpo = parteCuerpo;
        this.sustantivo = sustantivo;
    }

    get nombre() {
        return this.nombre;
    }

    get edad() {
        return this.edad;
    }

    get adjetivoCalificativo() {
        return this.adjetivoCalificativo;
    }

    get verbo() {
        return this.verbo;
    }

    get parteCuerpo() {
        return this.parteCuerpo;
    }

    get sustantivo() {
        return this.sustantivo;
    }

    set nombre(nombre) {
        this.nombre = nombre;
    }

    set edad(edad) {
        this.edad = edad;
    }
    
    set adjetivoCalificativo(adjetivoCalificativo) {
        this.adjetivoCalificativo = adjetivoCalificativo;
    }

    set verbo(verbo) {
        this.verbo = verbo;
    }
    
    set parteCuerpo(parteCuerpo) {
        this.parteCuerpo = parteCuerpo;
    }

    set sustantivo(sustantivo) {
        this.sustantivo = sustantivo;
    }

    generarFrase(){
        
    }

}