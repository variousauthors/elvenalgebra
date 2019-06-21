import { GoodsType, TIER_1_GOODS, GoodsTypeNames, TIER_2_GOODS, TIER_3_GOODS } from '../types';

const tier1 = TIER_1_GOODS.reduce((acc, goodsType) => {
  return acc.concat({
    value: String(goodsType),
    label: GoodsTypeNames[goodsType]
  })
}, [{ value: String(GoodsType.NONE), label: 'None' }])

const tier2 = TIER_2_GOODS.reduce((acc, goodsType) => {
  return acc.concat({
    value: String(goodsType),
    label: GoodsTypeNames[goodsType]
  })
}, [{ value: String(GoodsType.NONE), label: 'None' }])

const tier3 = TIER_3_GOODS.reduce((acc, goodsType) => {
  return acc.concat({
    value: String(goodsType),
    label: GoodsTypeNames[goodsType]
  })
}, [{ value: String(GoodsType.NONE), label: 'None' }])

export const GoodsSelectOptions = {
  tier1,
  tier2,
  tier3,
}
