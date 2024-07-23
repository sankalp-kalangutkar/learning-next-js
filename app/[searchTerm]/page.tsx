import getWikiResults from "@/lib/getWikiResults";

type Props = {
  params: {
    searchTerm: string;
  };
};

export default function page({ params }: Props) {
  return <div>page</div>;
}
