namespace DL
{
    public interface IRepository<T>
    {
        public T Add(T p_resource);

        public T Delete(T p_resource);
        public void Truncate();
        public T Update(T p_resource);
        public T? Get(int p_id);
        public List<T> GetAll();
    }
}