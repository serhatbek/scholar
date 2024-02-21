import { dataCourses } from '../../assets/data/dataCourses';
import { Banner } from '../../components';

const Courses = () => {
  const { dataBreadcrumb, title } = dataCourses;
  return (
    <>
      <Banner title={title} items={dataBreadcrumb} />
    </>
  );
};

export default Courses;
