import './Courses.scss';
import { dataCourses } from '../../assets/data/dataCourses';
import { Banner, CourseCard } from '../../components';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilter } from '../../store/redux/categoryFilterSlice';

interface RootState {
  categoryFilter: any;
}

const Courses = () => {
  const { dataBreadcrumb, heading, filterBtnList } = dataCourses;
  const filterMenuItems = [...new Set(filterBtnList?.map((item) => item))];
  const { courses } = useSelector((state: RootState) => state.categoryFilter);
  const dispatch = useDispatch();

  const handleFilter = (category: string) => {
    dispatch(setCategoryFilter(category));
  };

  return (
    <>
      <Banner heading={heading} items={dataBreadcrumb} />
      <section className='event-filter'>
        <div className='container'>
          <div className='event-filter__action'>
            {filterMenuItems?.map((categoryText) => {
              return (
                <button
                  key={useId()}
                  onClick={() => handleFilter(categoryText)}
                >
                  {categoryText}
                </button>
              );
            })}
          </div>
          <div className='box'>
            {courses?.map((item: any) => (
              <CourseCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
