import {Type, Static} from '@sinclair/typebox';

export const PostDealSchema = Type.Object({
    title: Type.String(),
    stage: Type.String(),
    value: Type.Number({minimum: 0}),
    status: Type.Enum({open: 'open', won: 'won', lost: 'lost'}),
})

export const GetDealSchema = Type.Object({
    id: Type.Number({minimum: 1}),
})

export type PostDealBody = Static<typeof PostDealSchema>;
export type GetDealParams = Static<typeof GetDealSchema>;
