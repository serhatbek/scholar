import { dataCourses } from '../../assets/data/dataCourses';
import { Banner } from '../../components';

const Courses = () => {
  const { dataBreadcrumb, heading } = dataCourses;
  return (
    <>
      <Banner heading={heading} items={dataBreadcrumb} />
    </>
  );
};

export default Courses;
