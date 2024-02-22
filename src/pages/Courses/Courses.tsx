import { dataCourses } from '../../assets/data/dataCourses';
import { Banner } from '../../components';

const Courses = () => {
  const { dataBreadcrumb, bannerTitle } = dataCourses;
  return (
    <>
      <Banner title={bannerTitle} items={dataBreadcrumb} />
    </>
  );
};

export default Courses;
