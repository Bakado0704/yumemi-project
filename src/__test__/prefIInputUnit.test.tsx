/* eslint-disable */
import { render, screen } from "@testing-library/react";

import { PrefInputUnit } from "@/components/pages/home/PrefInputUnit";

test("is all prefecture exist?", () => {
  const setPrefCodes = jest.fn();
  render(<PrefInputUnit setPrefCodes={setPrefCodes} />);
  const hokkaido = screen.getByText("北海道");
  const aomori = screen.getByText("青森県");
  const miyagi = screen.getByText("宮城県");
  const akita = screen.getByText("秋田県");
  const iwate = screen.getByText("岩手県");
  const yamagata = screen.getByText("山形県");
  const fukushima = screen.getByText("福島県");
  const ibaraki = screen.getByText("茨城県");
  const tochigi = screen.getByText("栃木県");
  const gunma = screen.getByText("群馬県");
  const saitama = screen.getByText("埼玉県");
  const chiba = screen.getByText("千葉県");
  const tokyo = screen.getByText("東京都");
  const kanagawa = screen.getByText("神奈川県");
  const niigata = screen.getByText("新潟県");
  const toyama = screen.getByText("富山県");
  const ishikawa = screen.getByText("石川県");
  const fukui = screen.getByText("福井県");
  const yamanashi = screen.getByText("山梨県");
  const nagano = screen.getByText("長野県");
  const gifu = screen.getByText("岐阜県");
  const shizuoka = screen.getByText("静岡県");
  const aichi = screen.getByText("愛知県");
  const mie = screen.getByText("三重県");
  const shiga = screen.getByText("滋賀県");
  const kyoto = screen.getByText("京都府");
  const osaka = screen.getByText("大阪府");
  const hyogo = screen.getByText("兵庫県");
  const nara = screen.getByText("奈良県");
  const wakayama = screen.getByText("和歌山県");
  const tottori = screen.getByText("鳥取県");
  const shimane = screen.getByText("島根県");
  const okayama = screen.getByText("岡山県");
  const hiroshima = screen.getByText("広島県");
  const yamaguchi = screen.getByText("山口県");
  const tokushima = screen.getByText("徳島県");
  const kagawa = screen.getByText("香川県");
  const ehime = screen.getByText("愛媛県");
  const kochi = screen.getByText("高知県");
  const fukuoka = screen.getByText("福岡県");
  const saga = screen.getByText("佐賀県");
  const nagasaki = screen.getByText("長崎県");
  const kumamoto = screen.getByText("熊本県");
  const oita = screen.getByText("大分県");
  const miyazaki = screen.getByText("宮崎県");
  const kagoshima = screen.getByText("鹿児島県");
  const okinawa = screen.getByText("沖縄県");

  expect(hokkaido).toBeInTheDocument();
  expect(aomori).toBeInTheDocument();
  expect(miyagi).toBeInTheDocument();
  expect(akita).toBeInTheDocument();
  expect(iwate).toBeInTheDocument();
  expect(yamagata).toBeInTheDocument();
  expect(fukushima).toBeInTheDocument();
  expect(ibaraki).toBeInTheDocument();
  expect(tochigi).toBeInTheDocument();
  expect(gunma).toBeInTheDocument();
  expect(saitama).toBeInTheDocument();
  expect(chiba).toBeInTheDocument();
  expect(tokyo).toBeInTheDocument();
  expect(kanagawa).toBeInTheDocument();
  expect(niigata).toBeInTheDocument();
  expect(toyama).toBeInTheDocument();
  expect(ishikawa).toBeInTheDocument();
  expect(fukui).toBeInTheDocument();
  expect(yamanashi).toBeInTheDocument();
  expect(nagano).toBeInTheDocument();
  expect(gifu).toBeInTheDocument();
  expect(shizuoka).toBeInTheDocument();
  expect(aichi).toBeInTheDocument();
  expect(mie).toBeInTheDocument();
  expect(shiga).toBeInTheDocument();
  expect(kyoto).toBeInTheDocument();
  expect(osaka).toBeInTheDocument();
  expect(hyogo).toBeInTheDocument();
  expect(nara).toBeInTheDocument();
  expect(wakayama).toBeInTheDocument();
  expect(tottori).toBeInTheDocument();
  expect(shimane).toBeInTheDocument();
  expect(okayama).toBeInTheDocument();
  expect(hiroshima).toBeInTheDocument();
  expect(yamaguchi).toBeInTheDocument();
  expect(tokushima).toBeInTheDocument();
  expect(kagawa).toBeInTheDocument();
  expect(ehime).toBeInTheDocument();
  expect(kochi).toBeInTheDocument();
  expect(fukuoka).toBeInTheDocument();
  expect(saga).toBeInTheDocument();
  expect(nagasaki).toBeInTheDocument();
  expect(kumamoto).toBeInTheDocument();
  expect(oita).toBeInTheDocument();
  expect(miyazaki).toBeInTheDocument();
  expect(kagoshima).toBeInTheDocument();
  expect(okinawa).toBeInTheDocument();
});
