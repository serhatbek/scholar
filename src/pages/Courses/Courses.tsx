import './Courses.scss';
import { dataCourses } from '../../assets/data/dataCourses';
import { Banner } from '../../components';

const Courses = () => {
  const { dataBreadcrumb, heading, filterBtnList } = dataCourses;
  return (
    <>
      <Banner heading={heading} items={dataBreadcrumb} />
      <section className='event-filter'>
        <div className='container'>
          <div className='event-filter__action'>
            {filterBtnList?.map((item) => {
              return <button>{item}</button>;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
