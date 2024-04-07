import BoxPicture from "@/components/BoxPicture";
import BoxResume from "@/components/BoxResume";
import ContainerRow from "@/components/ContainerRow";
import ContainerFeed from "@/components/ContainerFeed";
import ContainerIdentity from "@/components/ContainerIdentity";
import SectionTitle from "@/components/SectionTitle";
import BoxLinkedin from "@/components/BoxLinkedin";
import BoxGithub from "@/components/BoxGithub";
import BoxStacks from "@/components/BoxStacks";

export default function Home() {
  return (
    <ContainerRow>
      <ContainerIdentity>
        <BoxPicture />
        <BoxResume />
      </ContainerIdentity>
      <ContainerFeed>
        <SectionTitle title="Mes réseaux" />
        <ContainerRow>
          <BoxLinkedin />
          <BoxGithub />
        </ContainerRow>
        <SectionTitle title="Stacks technique" />
        <ContainerRow>
          <BoxStacks href="https://nextjs.org/" img={"/nextjs.svg"} title={"NextJS Framework"} />
          <BoxStacks href="https://spring.io/" img={"/spring.png"} title={"Spring Boot Framework"} />
          <BoxStacks href="https://nestjs.com/" img={"/nestjs.png"} title={"NestJS Framework"} />
          <BoxStacks href="https://symfony.com/" img={"/symfony.png"} title={"Symfony Framework"} />
        </ContainerRow>
        <SectionTitle title="Quelques réalisations" />
      </ContainerFeed>
    </ContainerRow>
  );
}
