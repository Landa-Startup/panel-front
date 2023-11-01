import MagazineStartUps from '@/components/magazine/MagazineStartUps';
import MagazineModernPost from '@/components/magazine/MagazineModernPost';
import Banner from '@/components/common/Banner';
import PostCard from '@/components/magazine/PostCard';
import SearchInput from '@/components/magazine/SearchInput';
import CategoriesContainer from '@/components/magazine/CategoriesContainer';
import TagsContainer from '@/components/magazine/TagsContainer';
import Landa from '@/components/icons/magazine/Landa';
import FetchBlogData from '@/utils/FetchBlogData';
import MagazineCardsContainer from '@/components/magazine/MagazineCardsContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landa Holding | Magazine',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};

export default function MagazinePage() {
  return (
    <div className="relative">
      <Banner image="/static/images/Magazine/hero.png" title="Magazine" />
      <div className="grid grid-cols-3 my-32 mx-28 gap-20">
        <MagazineCardsContainer />
        <div className="flex flex-col gap-12 col-span-1">
          <SearchInput />
          <CategoriesContainer />
          <TagsContainer />
        </div>
      </div>
      <Landa />
    </div>
  );
}
