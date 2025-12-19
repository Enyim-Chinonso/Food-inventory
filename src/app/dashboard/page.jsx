export default function DashboardPage() {
  return (
    <div>
      <h2 className="mb-4">Dashboard Overview</h2>

      <div className="row g-4">
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6>Total Items</h6>
              <h3>120</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6>Low Stock</h6>
              <h3 className="text-warning">8</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6>Expiring Soon</h6>
              <h3 className="text-danger">5</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6>Suppliers</h6>
              <h3>12</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
