// import { IoIosAddCircleOutline } from "react-icons/io";

import Button from "@/components/atoms/Button/Button";
import SearchInput from "@/components/atoms/SearchInput/SearchInput";
import Title from "@/components/atoms/Title/Title";
import TitleSecondary from "@/components/atoms/TitleSecondary/TitleSecondary";
import Tabs from "@/components/molecules/Tabs/Tabs";

export default function AdminPanel() {
  return (
    <div style={{ padding: "4rem 4rem" }}>
      <Title>HOLA</Title> 
      <Tabs></Tabs>
      <TitleSecondary>HOLA</TitleSecondary>
      <SearchInput/>
      <Button variant="rounded" color="pink">Agregar </Button>
    </div>
  );
}
