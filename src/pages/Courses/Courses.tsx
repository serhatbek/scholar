import './Courses.scss';
import { dataCourses } from '../../assets/data/dataCourses';
import { Banner } from '../../components';
import { useId } from 'react';

const Courses = () => {
  const { dataBreadcrumb, heading, filterBtnList } = dataCourses;
  const filterMenuItems = [...new Set(filterBtnList?.map((item) => item))];
  console.log(filterMenuItems);
  return (
    <>
      <Banner heading={heading} items={dataBreadcrumb} />
      <section className='event-filter'>
        <div className='container'>
          <div className='event-filter__action'>
            {filterMenuItems?.map((item) => {
              return <button key={useId()}>{item}</button>;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
