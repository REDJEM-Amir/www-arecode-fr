import BoxPicture from "@/components/BoxPicture";
import BoxResume from "@/components/BoxResume";
import ContainerRow from "@/components/ContainerRow";
import ContainerFeed from "@/components/ContainerFeed";
import ContainerIdentity from "@/components/ContainerIdentity";
import SectionTitle from "@/components/SectionTitle";
import BoxLinkedin from "@/components/BoxLinkedin";
import BoxGithub from "@/components/BoxGithub";

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
        <SectionTitle title="Quelques réalisations" />
      </ContainerFeed>
    </ContainerRow>
  );
}
