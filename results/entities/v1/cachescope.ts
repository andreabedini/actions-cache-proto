// @generated by protobuf-ts 2.9.1 with parameter long_type_string,client_none,generate_dependencies
// @generated from protobuf file "results/entities/v1/cachescope.proto" (package "github.actions.results.entities.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message github.actions.results.entities.v1.CacheScope
 */
export interface CacheScope {
    /**
     * Determines the scope of the cache entry
     *
     * @generated from protobuf field: string scope = 1;
     */
    scope: string;
    /**
     * None: 0 | Read: 1 | Write: 2 | All: (1|2)
     *
     * @generated from protobuf field: int64 permission = 2;
     */
    permission: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class CacheScope$Type extends MessageType<CacheScope> {
    constructor() {
        super("github.actions.results.entities.v1.CacheScope", [
            { no: 1, name: "scope", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "permission", kind: "scalar", T: 3 /*ScalarType.INT64*/ }
        ]);
    }
    create(value?: PartialMessage<CacheScope>): CacheScope {
        const message = { scope: "", permission: "0" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CacheScope>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CacheScope): CacheScope {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string scope */ 1:
                    message.scope = reader.string();
                    break;
                case /* int64 permission */ 2:
                    message.permission = reader.int64().toString();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CacheScope, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string scope = 1; */
        if (message.scope !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.scope);
        /* int64 permission = 2; */
        if (message.permission !== "0")
            writer.tag(2, WireType.Varint).int64(message.permission);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.entities.v1.CacheScope
 */
export const CacheScope = new CacheScope$Type();
