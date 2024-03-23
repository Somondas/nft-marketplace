import React from "react";
import { EthPrice, NFTtitle } from "./SubInfo";
import { SIZES } from "../constants";

export default function DetailsDesc({ data }) {
  return (
    <View>
      <NFTtitle
        title={data.name}
        subTitle={data.creator}
        titleSize={SIZES.extraLarge}
        subTitleSize={SIZES.font}
      />
      <EthPrice price={data.price} />
    </View>
  );
}
