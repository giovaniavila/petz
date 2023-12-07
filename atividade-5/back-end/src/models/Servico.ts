import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import Empresa from "./Empresa";
import Cliente from "./Cliente";
import ClienteServico from "./ClienteServico";

@Table({ tableName: "Servico", timestamps: false })
export default class Servico extends Model {
    @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true })
    id!: number;
    
    @Column({ type: DataType.STRING(255), allowNull: false })
    nome!: string;

    @Column({ type: DataType.FLOAT, allowNull: false })
    valor!: number;

    @BelongsToMany(() => Cliente, () => ClienteServico)
    clientes!: Cliente[]

    @ForeignKey(() => Empresa)
    @Column({ type: DataType.INTEGER, allowNull: false })
    empresaId!: number;

    @BelongsTo(() => Empresa, {constraints: false, onDelete: 'cascade'})
    empresa!: Empresa;
}