"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Llamada3D = void 0;
class Llamada3D {
    constructor(tipo, nombreMetodo, codigo3d, fila, columna) {
        this.fila = fila;
        this.columna = columna;
        this.tipo = tipo;
        this.codigo3D = codigo3d;
        this.metodo = nombreMetodo;
        this.eliminada = false;
        this.optimizada = false;
    }
    isOptimizada() {
        return this.optimizada;
    }
    setOptimizada(optimizada) {
        this.optimizada = optimizada;
    }
    isEliminada() {
        return this.eliminada;
    }
    setEliminada(eliminada) {
        this.eliminada = eliminada;
    }
    getTipoInstruccion() {
        return this.tipo;
    }
    setCodigo3D(codigo) {
        this.codigo3D = codigo;
    }
    getCodigo3D() {
        return this.codigo3D;
    }
}
exports.Llamada3D = Llamada3D;
